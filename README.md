# Puter OpenAI Proxy

一个基于 Deno 的 OpenAI 兼容代理服务，将 OpenAI API 请求转发到 Puter 平台。支持流式和非流式聊天补全，无需数据库和配置文件，开箱即用。

## ✨ 特性

- 🚀 **零配置部署** - 单文件，无需数据库或配置文件
- 🔑 **Token 透传** - 直接使用你的 Puter Token 作为 API Key
- 🌊 **真流式输出** - 完整支持 Server-Sent Events (SSE)
- 🔄 **三种消息模式** - 原样透传、标准化处理、全量聚合
- 🌐 **OpenAI 兼容** - 支持 `/v1/chat/completions` 和 `/v1/models`
- ☁️ **云端部署** - 完美适配 Deno Deploy
- 🎯 **300+ 模型** - 支持 OpenRouter 全量模型列表

## 🚀 快速开始

### Deno Deploy 部署

1. Fork 本仓库
2. 在 [Deno Deploy](https://dash.deno.com) 创建新项目
3. 连接你的 GitHub 仓库
4. 选择 `deno-puter-proxy.ts` 作为入口文件
5. 部署完成！
（或者直接复制粘贴过去更方便捏）

## 📖 使用方法

### 获取 Puter Token

1. 访问 https://partybobo-peter.hf.space
2. 授权
3. 页面上会显示token，选取复制即可（做了一键复制但似乎不好使）

### API 调用示例

#### 非流式聊天

```bash
curl https://your-deploy.deno.dev/v1/chat/completions \
  -H "Authorization: Bearer YOUR_PUTER_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openrouter:anthropic/claude-3.5-sonnet",
    "messages": [
      {"role": "system", "content": "你是一个有用的AI助手"},
      {"role": "user", "content": "你好"}
    ],
    "stream": false
  }'
```

#### 流式聊天

```bash
curl https://your-deploy.deno.dev/v1/chat/completions \
  -H "Authorization: Bearer YOUR_PUTER_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openrouter:anthropic/claude-3.5-sonnet",
    "messages": [{"role": "user", "content": "写一首诗"}],
    "stream": true
  }'
```

#### 获取模型列表

```bash
curl https://your-deploy.deno.dev/v1/models \
  -H "Authorization: Bearer YOUR_PUTER_TOKEN"
```

### 在代码中使用

#### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_PUTER_TOKEN",
    base_url="https://your-deploy.deno.dev/v1"
)

response = client.chat.completions.create(
    model="openrouter:anthropic/claude-3.5-sonnet",
    messages=[
        {"role": "user", "content": "Hello!"}
    ],
    stream=True
)

for chunk in response:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")
```

#### JavaScript/Node.js

```javascript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'YOUR_PUTER_TOKEN',
  baseURL: 'https://your-deploy.deno.dev/v1',
});

const stream = await openai.chat.completions.create({
  model: 'openrouter:anthropic/claude-3.5-sonnet',
  messages: [{ role: 'user', content: 'Hello!' }],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}
```

## ⚙️ 配置选项

### 消息处理模式

在 `deno-puter-proxy.ts` 文件顶部修改 `MODE` 常量：

```typescript
const MODE: Mode = "raw"; // 可选: "raw" | "standard" | "full"
```

- **`raw`** (默认) - 原样透传消息，不做任何处理
- **`standard`** - 聚合所有 system 消息，强制 user/assistant 交替
- **`full`** - 将所有消息合并为单条，保留角色前缀 `[role] content`

### 支持的模型

本代理支持 300+ OpenRouter 模型，包括但不限于：

- **Anthropic**: `openrouter:anthropic/claude-3.5-sonnet`
- **OpenAI**: `openrouter:openai/gpt-4o`
- **Google**: `openrouter:google/gemini-2.5-flash`
- **Meta**: `openrouter:meta-llama/llama-3.3-70b-instruct`
- **DeepSeek**: `openrouter:deepseek/deepseek-r1`
- **Qwen**: `openrouter:qwen/qwen3-32b`

完整模型列表请访问 `/v1/models` 端点或查看源码中的 `MODELS` 常量。

## 🔧 开发

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/your-username/puter-openai-proxy.git
cd puter-openai-proxy

# 运行开发服务器
deno run --allow-net --watch deno-puter-proxy.ts
```

### 自定义修改

1. **添加新模型**: 在 `MODELS` 数组中添加模型 ID
2. **修改消息处理**: 调整 `rawMessages`、`normalizeMessages` 或 `buildFullContent` 函数
3. **自定义路由**: 在 `handler` 函数中添加新的路由处理

## 📝 API 文档

### POST /v1/chat/completions

创建聊天补全。

**请求体**:
```json
{
  "model": "string",
  "messages": [
    {
      "role": "system|user|assistant",
      "content": "string"
    }
  ],
  "stream": false
}
```

**响应** (非流式):
```json
{
  "id": "chatcmpl-xxx",
  "object": "chat.completion",
  "created": 1234567890,
  "model": "string",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "string"
      },
      "finish_reason": "stop"
    }
  ]
}
```

### GET /v1/models

获取可用模型列表。

**响应**:
```json
{
  "object": "list",
  "data": [
    {
      "id": "openrouter:anthropic/claude-3.5-sonnet"
    }
  ]
}
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Puter](https://puter.com) - 提供强大的 AI 平台
- [OpenRouter](https://openrouter.ai) - 提供多样化的模型选择
- [Deno](https://deno.land) - 现代化的 JavaScript/TypeScript 运行时

## 📞 支持

如果你觉得这个项目有用，请给它一个 ⭐️！


---

**免责声明**: 本项目仅供学习和研究使用。请遵守相关服务的使用条款。
