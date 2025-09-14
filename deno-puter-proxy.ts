const MODELS: string[] = `
openrouter:agentica-org/deepcoder-14b-preview
openrouter:agentica-org/deepcoder-14b-preview:free
openrouter:ai21/jamba-large-1.7
openrouter:ai21/jamba-mini-1.7
openrouter:aion-labs/aion-1.0
openrouter:aion-labs/aion-1.0-mini
openrouter:aion-labs/aion-rp-llama-3.1-8b
openrouter:alfredpros/codellama-7b-instruct-solidity
openrouter:alpindale/goliath-120b
openrouter:amazon/nova-lite-v1
openrouter:amazon/nova-micro-v1
openrouter:amazon/nova-pro-v1
openrouter:anthracite-org/magnum-v2-72b
openrouter:anthracite-org/magnum-v4-72b
openrouter:anthropic/claude-3-haiku
openrouter:anthropic/claude-3-opus
openrouter:anthropic/claude-3.5-haiku
openrouter:anthropic/claude-3.5-haiku-20241022
openrouter:anthropic/claude-3.5-sonnet
openrouter:anthropic/claude-3.5-sonnet-20240620
openrouter:anthropic/claude-3.7-sonnet
openrouter:anthropic/claude-3.7-sonnet:thinking
openrouter:anthropic/claude-opus-4
openrouter:anthropic/claude-opus-4.1
openrouter:anthropic/claude-sonnet-4
openrouter:arcee-ai/coder-large
openrouter:arcee-ai/maestro-reasoning
openrouter:arcee-ai/spotlight
openrouter:arcee-ai/virtuoso-large
openrouter:arliai/qwq-32b-arliai-rpr-v1
openrouter:arliai/qwq-32b-arliai-rpr-v1:free
openrouter:baidu/ernie-4.5-21b-a3b
openrouter:baidu/ernie-4.5-300b-a47b
openrouter:baidu/ernie-4.5-vl-28b-a3b
openrouter:baidu/ernie-4.5-vl-424b-a47b
openrouter:bytedance/ui-tars-1.5-7b
openrouter:cognitivecomputations/dolphin-mistral-24b-venice-edition:free
openrouter:cognitivecomputations/dolphin-mixtral-8x22b
openrouter:cognitivecomputations/dolphin3.0-mistral-24b
openrouter:cognitivecomputations/dolphin3.0-mistral-24b:free
openrouter:cognitivecomputations/dolphin3.0-r1-mistral-24b
openrouter:cognitivecomputations/dolphin3.0-r1-mistral-24b:free
openrouter:cohere/command
openrouter:cohere/command-a
openrouter:cohere/command-r
openrouter:cohere/command-r-03-2024
openrouter:cohere/command-r-08-2024
openrouter:cohere/command-r-plus
openrouter:cohere/command-r-plus-04-2024
openrouter:cohere/command-r-plus-08-2024
openrouter:cohere/command-r7b-12-2024
openrouter:deepseek/deepseek-chat
openrouter:deepseek/deepseek-chat-v3-0324
openrouter:deepseek/deepseek-chat-v3-0324:free
openrouter:deepseek/deepseek-chat-v3.1
openrouter:deepseek/deepseek-chat-v3.1:free
openrouter:deepseek/deepseek-prover-v2
openrouter:deepseek/deepseek-r1
openrouter:deepseek/deepseek-r1-0528
openrouter:deepseek/deepseek-r1-0528-qwen3-8b
openrouter:deepseek/deepseek-r1-0528-qwen3-8b:free
openrouter:deepseek/deepseek-r1-0528:free
openrouter:deepseek/deepseek-r1-distill-llama-70b
openrouter:deepseek/deepseek-r1-distill-llama-70b:free
openrouter:deepseek/deepseek-r1-distill-llama-8b
openrouter:deepseek/deepseek-r1-distill-qwen-14b
openrouter:deepseek/deepseek-r1-distill-qwen-14b:free
openrouter:deepseek/deepseek-r1-distill-qwen-32b
openrouter:deepseek/deepseek-r1:free
openrouter:deepseek/deepseek-v3.1-base
openrouter:eleutherai/llemma_7b
openrouter:google/gemini-2.0-flash-001
openrouter:google/gemini-2.0-flash-exp:free
openrouter:google/gemini-2.0-flash-lite-001
openrouter:google/gemini-2.5-flash
openrouter:google/gemini-2.5-flash-image-preview
openrouter:google/gemini-2.5-flash-image-preview:free
openrouter:google/gemini-2.5-flash-lite
openrouter:google/gemini-2.5-flash-lite-preview-06-17
openrouter:google/gemini-2.5-pro
openrouter:google/gemini-2.5-pro-exp-03-25
openrouter:google/gemini-2.5-pro-preview
openrouter:google/gemini-2.5-pro-preview-05-06
openrouter:google/gemini-flash-1.5
openrouter:google/gemini-flash-1.5-8b
openrouter:google/gemini-pro-1.5
openrouter:google/gemma-2-27b-it
openrouter:google/gemma-2-9b-it
openrouter:google/gemma-2-9b-it:free
openrouter:google/gemma-3-12b-it
openrouter:google/gemma-3-12b-it:free
openrouter:google/gemma-3-27b-it
openrouter:google/gemma-3-27b-it:free
openrouter:google/gemma-3-4b-it
openrouter:google/gemma-3-4b-it:free
openrouter:google/gemma-3n-e2b-it:free
openrouter:google/gemma-3n-e4b-it
openrouter:google/gemma-3n-e4b-it:free
openrouter:gryphe/mythomax-l2-13b
openrouter:inception/mercury
openrouter:inception/mercury-coder
openrouter:infermatic/mn-inferor-12b
openrouter:inflection/inflection-3-pi
openrouter:inflection/inflection-3-productivity
openrouter:liquid/lfm-3b
openrouter:liquid/lfm-7b
openrouter:mancer/weaver
openrouter:meta-llama/llama-3-70b-instruct
openrouter:meta-llama/llama-3-8b-instruct
openrouter:meta-llama/llama-3.1-405b
openrouter:meta-llama/llama-3.1-405b-instruct
openrouter:meta-llama/llama-3.1-405b-instruct:free
openrouter:meta-llama/llama-3.1-70b-instruct
openrouter:meta-llama/llama-3.1-8b-instruct
openrouter:meta-llama/llama-3.2-11b-vision-instruct
openrouter:meta-llama/llama-3.2-1b-instruct
openrouter:meta-llama/llama-3.2-3b-instruct
openrouter:meta-llama/llama-3.2-3b-instruct:free
openrouter:meta-llama/llama-3.2-90b-vision-instruct
openrouter:meta-llama/llama-3.3-70b-instruct
openrouter:meta-llama/llama-3.3-70b-instruct:free
openrouter:meta-llama/llama-3.3-8b-instruct:free
openrouter:meta-llama/llama-4-maverick
openrouter:meta-llama/llama-4-maverick:free
openrouter:meta-llama/llama-4-scout
openrouter:meta-llama/llama-4-scout:free
openrouter:meta-llama/llama-guard-2-8b
openrouter:meta-llama/llama-guard-3-8b
openrouter:meta-llama/llama-guard-4-12b
openrouter:microsoft/mai-ds-r1
openrouter:microsoft/mai-ds-r1:free
openrouter:microsoft/phi-3-medium-128k-instruct
openrouter:microsoft/phi-3-mini-128k-instruct
openrouter:microsoft/phi-3.5-mini-128k-instruct
openrouter:microsoft/phi-4
openrouter:microsoft/phi-4-multimodal-instruct
openrouter:microsoft/phi-4-reasoning-plus
openrouter:microsoft/wizardlm-2-8x22b
openrouter:minimax/minimax-01
openrouter:minimax/minimax-m1
openrouter:mistralai/codestral-2501
openrouter:mistralai/codestral-2508
openrouter:mistralai/devstral-medium
openrouter:mistralai/devstral-small
openrouter:mistralai/devstral-small-2505
openrouter:mistralai/devstral-small-2505:free
openrouter:mistralai/magistral-medium-2506
openrouter:mistralai/magistral-medium-2506:thinking
openrouter:mistralai/magistral-small-2506
openrouter:mistralai/ministral-3b
openrouter:mistralai/ministral-8b
openrouter:mistralai/mistral-7b-instruct
openrouter:mistralai/mistral-7b-instruct-v0.1
openrouter:mistralai/mistral-7b-instruct-v0.3
openrouter:mistralai/mistral-7b-instruct:free
openrouter:mistralai/mistral-large
openrouter:mistralai/mistral-large-2407
openrouter:mistralai/mistral-large-2411
openrouter:mistralai/mistral-medium-3
openrouter:mistralai/mistral-medium-3.1
openrouter:mistralai/mistral-nemo
openrouter:mistralai/mistral-nemo:free
openrouter:mistralai/mistral-saba
openrouter:mistralai/mistral-small
openrouter:mistralai/mistral-small-24b-instruct-2501
openrouter:mistralai/mistral-small-24b-instruct-2501:free
openrouter:mistralai/mistral-small-3.1-24b-instruct
openrouter:mistralai/mistral-small-3.1-24b-instruct:free
openrouter:mistralai/mistral-small-3.2-24b-instruct
openrouter:mistralai/mistral-small-3.2-24b-instruct:free
openrouter:mistralai/mistral-tiny
openrouter:mistralai/mixtral-8x22b-instruct
openrouter:mistralai/mixtral-8x7b-instruct
openrouter:mistralai/pixtral-12b
openrouter:mistralai/pixtral-large-2411
openrouter:moonshotai/kimi-dev-72b:free
openrouter:moonshotai/kimi-k2
openrouter:moonshotai/kimi-k2:free
openrouter:moonshotai/kimi-vl-a3b-thinking
openrouter:moonshotai/kimi-vl-a3b-thinking:free
openrouter:morph/morph-v3-fast
openrouter:morph/morph-v3-large
openrouter:neversleep/llama-3-lumimaid-70b
openrouter:neversleep/llama-3.1-lumimaid-8b
openrouter:neversleep/noromaid-20b
openrouter:nousresearch/deephermes-3-llama-3-8b-preview:free
openrouter:nousresearch/deephermes-3-mistral-24b-preview
openrouter:nousresearch/hermes-2-pro-llama-3-8b
openrouter:nousresearch/hermes-3-llama-3.1-405b
openrouter:nousresearch/hermes-3-llama-3.1-70b
openrouter:nousresearch/hermes-4-405b
openrouter:nousresearch/hermes-4-70b
openrouter:nousresearch/nous-hermes-2-mixtral-8x7b-dpo
openrouter:nvidia/llama-3.1-nemotron-70b-instruct
openrouter:nvidia/llama-3.1-nemotron-ultra-253b-v1
openrouter:nvidia/llama-3.1-nemotron-ultra-253b-v1:free
openrouter:nvidia/llama-3.3-nemotron-super-49b-v1
openrouter:openai/chatgpt-4o-latest
openrouter:openai/codex-mini
openrouter:openai/gpt-3.5-turbo
openrouter:openai/gpt-3.5-turbo-0613
openrouter:openai/gpt-3.5-turbo-16k
openrouter:openai/gpt-3.5-turbo-instruct
openrouter:openai/gpt-4
openrouter:openai/gpt-4-0314
openrouter:openai/gpt-4-1106-preview
openrouter:openai/gpt-4-turbo
openrouter:openai/gpt-4-turbo-preview
openrouter:openai/gpt-4.1
openrouter:openai/gpt-4.1-mini
openrouter:openai/gpt-4.1-nano
openrouter:openai/gpt-4o
openrouter:openai/gpt-4o-2024-05-13
openrouter:openai/gpt-4o-2024-08-06
openrouter:openai/gpt-4o-2024-11-20
openrouter:openai/gpt-4o-audio-preview
openrouter:openai/gpt-4o-mini
openrouter:openai/gpt-4o-mini-2024-07-18
openrouter:openai/gpt-4o-mini-search-preview
openrouter:openai/gpt-4o-search-preview
openrouter:openai/gpt-4o:extended
openrouter:openai/gpt-5
openrouter:openai/gpt-5-chat
openrouter:openai/gpt-5-mini
openrouter:openai/gpt-5-nano
openrouter:openai/gpt-oss-120b
openrouter:openai/gpt-oss-120b:free
openrouter:openai/gpt-oss-20b
openrouter:openai/gpt-oss-20b:free
openrouter:openai/o1
openrouter:openai/o1-mini
openrouter:openai/o1-mini-2024-09-12
openrouter:openai/o1-pro
openrouter:openai/o3
openrouter:openai/o3-mini
openrouter:openai/o3-mini-high
openrouter:openai/o3-pro
openrouter:openai/o4-mini
openrouter:openai/o4-mini-high
openrouter:opengvlab/internvl3-14b
openrouter:openrouter/auto
openrouter:perplexity/r1-1776
openrouter:perplexity/sonar
openrouter:perplexity/sonar-deep-research
openrouter:perplexity/sonar-pro
openrouter:perplexity/sonar-reasoning
openrouter:perplexity/sonar-reasoning-pro
openrouter:pygmalionai/mythalion-13b
openrouter:qwen/qwen-2.5-72b-instruct
openrouter:qwen/qwen-2.5-72b-instruct:free
openrouter:qwen/qwen-2.5-7b-instruct
openrouter:qwen/qwen-2.5-coder-32b-instruct
openrouter:qwen/qwen-2.5-coder-32b-instruct:free
openrouter:qwen/qwen-2.5-vl-7b-instruct
openrouter:qwen/qwen-max
openrouter:qwen/qwen-plus
openrouter:qwen/qwen-turbo
openrouter:qwen/qwen-vl-max
openrouter:qwen/qwen-vl-plus
openrouter:qwen/qwen2.5-vl-32b-instruct
openrouter:qwen/qwen2.5-vl-32b-instruct:free
openrouter:qwen/qwen2.5-vl-72b-instruct
openrouter:qwen/qwen2.5-vl-72b-instruct:free
openrouter:qwen/qwen3-14b
openrouter:qwen/qwen3-14b:free
openrouter:qwen/qwen3-235b-a22b
openrouter:qwen/qwen3-235b-a22b-2507
openrouter:qwen/qwen3-235b-a22b-thinking-2507
openrouter:qwen/qwen3-235b-a22b:free
openrouter:qwen/qwen3-30b-a3b
openrouter:qwen/qwen3-30b-a3b-instruct-2507
openrouter:qwen/qwen3-30b-a3b-thinking-2507
openrouter:qwen/qwen3-30b-a3b:free
openrouter:qwen/qwen3-32b
openrouter:qwen/qwen3-4b:free
openrouter:qwen/qwen3-8b
openrouter:qwen/qwen3-8b:free
openrouter:qwen/qwen3-coder
openrouter:qwen/qwen3-coder-30b-a3b-instruct
openrouter:qwen/qwen3-coder:free
openrouter:qwen/qwq-32b
openrouter:qwen/qwq-32b-preview
openrouter:qwen/qwq-32b:free
openrouter:raifle/sorcererlm-8x22b
openrouter:rekaai/reka-flash-3:free
openrouter:sao10k/l3-euryale-70b
openrouter:sao10k/l3-lunaris-8b
openrouter:sao10k/l3.1-euryale-70b
openrouter:sao10k/l3.3-euryale-70b
openrouter:sarvamai/sarvam-m:free
openrouter:scb10x/llama3.1-typhoon2-70b-instruct
openrouter:shisa-ai/shisa-v2-llama3.3-70b
openrouter:shisa-ai/shisa-v2-llama3.3-70b:free
openrouter:sophosympatheia/midnight-rose-70b
openrouter:switchpoint/router
openrouter:tencent/hunyuan-a13b-instruct
openrouter:tencent/hunyuan-a13b-instruct:free
openrouter:thedrummer/anubis-70b-v1.1
openrouter:thedrummer/anubis-pro-105b-v1
openrouter:thedrummer/rocinante-12b
openrouter:thedrummer/skyfall-36b-v2
openrouter:thedrummer/unslopnemo-12b
openrouter:thudm/glm-4-32b
openrouter:thudm/glm-4.1v-9b-thinking
openrouter:thudm/glm-z1-32b
openrouter:tngtech/deepseek-r1t-chimera
openrouter:tngtech/deepseek-r1t-chimera:free
openrouter:tngtech/deepseek-r1t2-chimera:free
openrouter:undi95/remm-slerp-l2-13b
openrouter:x-ai/grok-2-1212
openrouter:x-ai/grok-2-vision-1212
openrouter:x-ai/grok-3
openrouter:x-ai/grok-3-beta
openrouter:x-ai/grok-3-mini
openrouter:x-ai/grok-3-mini-beta
openrouter:x-ai/grok-4
openrouter:x-ai/grok-code-fast-1
openrouter:x-ai/grok-vision-beta
openrouter:z-ai/glm-4-32b
openrouter:z-ai/glm-4.5
openrouter:z-ai/glm-4.5-air
openrouter:z-ai/glm-4.5-air:free
openrouter:z-ai/glm-4.5v
`.trim().split('\n');

type Mode = "raw" | "standard" | "full";
// raw: 原样透传（不聚合，不强制交替，不强制首尾为 user）
// standard: 聚合 system，user/assistant 交替，首尾 user
// full: 汇总为单条 content 并保留 [role] 前缀
const MODE: Mode = "raw";

// ================== 类型定义 ==================

interface ChatMessage {
  role: string;
  // 支持字符串或对象数组（用于多模态输入）
  content: string | any[];
}

interface ChatRequest {
  model: string;
  messages: ChatMessage[];
  stream?: boolean;
}

interface PuterRequest {
  interface: string;
  driver: string;
  test_mode: boolean;
  method: string;
  args: {
    messages: ChatMessage[];
    model: string;
    stream: boolean;
  };
}

interface ChatStreamChunk {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    delta: {
      role?: string;
      content?: string;
    };
    finish_reason?: string | null;
  }>;
}

interface ChatCompletion {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
}

// ================== 工具函数 ==================

function generateId(): string {
  return `chatcmpl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function mapModel(model: string): string {
  // 不做映射，直接透传
  return model;
}

// 原样模式：不过滤不过聚合，直接透传（仅统一小写 role）
function rawMessages(messages: ChatMessage[]): ChatMessage[] {
  return messages
    .filter((m) => typeof m?.role === "string" && typeof m?.content === "string")
    .map((m) => ({ role: m.role.toLowerCase(), content: m.content }));
}

// 聚合所有消息为一条（full 模式）
function buildFullContent(messages: ChatMessage[]): string {
  return messages
    .filter(m => ["system", "user", "assistant"].includes(m.role.toLowerCase()))
    .map(m => `[${m.role.toLowerCase()}] ${m.content}`)
    .join("\n\n");
}

// 标准模式：聚合 system，user/assistant 交替
function normalizeMessages(messages: ChatMessage[]): ChatMessage[] {
  const systemParts: string[] = [];
  const ua: ChatMessage[] = [];

  for (const m of messages) {
    const role = m.role.toLowerCase();
    if (role === "system") {
      systemParts.push(m.content);
    } else if (role === "user" || role === "assistant") {
      ua.push({ role, content: m.content });
    }
  }

  const result: ChatMessage[] = [];
  if (systemParts.length > 0) {
    result.push({ role: "system", content: systemParts.join("\n\n") });
  }

  // 强制 user/assistant 交替，首尾为 user
  for (let i = 0; i < ua.length; i++) {
    if (result.length === 0) {
      if (ua[i].role === "user") result.push(ua[i]);
      continue;
    }
    const last = result[result.length - 1];
    if (last.role === "system" && ua[i].role === "user") {
      result.push(ua[i]);
    } else if (last.role === "user" && ua[i].role === "assistant") {
      result.push(ua[i]);
    } else if (last.role === "assistant" && ua[i].role === "user") {
      result.push(ua[i]);
    }
  }

  // 确保最后一条是 user
  if (result.length > 0 && result[result.length - 1].role !== "user") {
    result.push({ role: "user", content: "" });
  }

  return result;
}

// ================== 核心逻辑（修改版） ==================

async function handleChatCompletions(request: Request): Promise<Response> {
  // 提取 token
  const authHeader = request.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ error: "Missing or invalid Authorization header" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  const token = authHeader.slice(7);

  // 解析请求
  let chatRequest: ChatRequest;
  try {
    chatRequest = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const mappedModel = mapModel(chatRequest.model);
  const stream = chatRequest.stream ?? false;

  // 处理消息（三种模式）
  let finalMessages: ChatMessage[];
  switch (MODE) {
    case "full": {
      const content = buildFullContent(chatRequest.messages);
      finalMessages = [{ role: "user", content }];
      break;
    }
    case "standard": {
      finalMessages = normalizeMessages(chatRequest.messages);
      break;
    }
    case "raw":
    default: {
      finalMessages = rawMessages(chatRequest.messages);
      break;
    }
  }
  
  // =================================================================
  // ======================  ↓↓↓ 新增逻辑开始 ↓↓↓ ======================
  // =================================================================

  // 特殊处理 Gemini 图像生成模型
  // 你可以在这里添加更多需要特殊处理的模型
  const imageModels = [
    'openrouter:google/gemini-2.5-flash-image-preview',
    'openrouter:google/gemini-2.5-flash-image-preview:free'
    // 以后有其他类似模型也可以加到这个数组里
  ];
  
  if (imageModels.includes(mappedModel)) {
    console.log(`[INFO] Applying special format for image model: ${mappedModel}`);
    
    finalMessages = finalMessages.map(msg => {
      // 仅转换角色为 'user' 且内容为简单字符串的消息
      if (msg.role.toLowerCase() === 'user' && typeof msg.content === 'string') {
        return {
          ...msg,
          // 将字符串内容转换为 Gemini API 期望的数组格式
          content: [{ type: 'text', text: msg.content }]
        };
      }
      // 对于其他消息（如 assistant 的回复或已经是正确格式的用户消息），保持原样
      return msg;
    });
  }

  // =================================================================
  // ======================  ↑↑↑ 新增逻辑结束 ↑↑↑ ======================
  // =================================================================


  try {
    // 将处理后（可能已被转换）的消息发送给 Puter
    const puterResponse = await callPuter(token, mappedModel, finalMessages, stream);

    if (stream) {
      return handleStreamResponse(puterResponse, mappedModel);
    } else {
      return handleNonStreamResponse(puterResponse, mappedModel);
    }
  } catch (error) {
    return new Response(JSON.stringify({
      error: "Upstream error",
      detail: error.message
    }), {
      status: 502,
      headers: { "Content-Type": "application/json" }
    });
  }
}


async function handleStreamResponse(puterResponse: Response, model: string): Promise<Response> {
  const reader = puterResponse.body?.getReader();
  if (!reader) {
    throw new Error("No response body");
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const stream = new ReadableStream({
    async start(controller) {
      // 发送初始 chunk
      const startChunk: ChatStreamChunk = {
        id: generateId(),
        object: "chat.completion.chunk",
        created: Math.floor(Date.now() / 1000),
        model,
        choices: [{
          index: 0,
          delta: { role: "assistant" },
          finish_reason: null
        }]
      };
      controller.enqueue(encoder.encode(`data: ${JSON.stringify(startChunk)}\n\n`));

      let buffer = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || /^[0-9a-fA-F]+$/.test(trimmed)) continue;

            try {
              const item = JSON.parse(trimmed);
              if (item.type === "text" && item.text) {
                const chunk: ChatStreamChunk = {
                  id: generateId(),
                  object: "chat.completion.chunk",
                  created: Math.floor(Date.now() / 1000),
                  model,
                  choices: [{
                    index: 0,
                    delta: { content: item.text },
                    finish_reason: null
                  }]
                };
                controller.enqueue(encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`));
              }
            } catch {
              // 忽略解析错误
            }
          }
        }
      } catch (error) {
        console.error("Stream error:", error);
      } finally {
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      }
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

async function handleNonStreamResponse(puterResponse: Response, model: string): Promise<Response> {
  const reader = puterResponse.body?.getReader();
  if (!reader) {
    throw new Error("No response body");
  }

  const decoder = new TextDecoder();
  let buffer = "";
  let content = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || /^[0-9a-fA-F]+$/.test(trimmed)) continue;

        try {
          const item = JSON.parse(trimmed);
          if (item.type === "text" && item.text) {
            content += item.text;
          }
        } catch {
          // 忽略解析错误
        }
      }
    }
  } catch (error) {
    console.error("Non-stream error:", error);
  }

  const completion: ChatCompletion = {
    id: generateId(),
    object: "chat.completion",
    created: Math.floor(Date.now() / 1000),
    model,
    choices: [{
      index: 0,
      message: {
        role: "assistant",
        content
      },
      finish_reason: "stop"
    }]
  };

  return new Response(JSON.stringify(completion), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

function handleModels(): Response {
  const models = MODELS.map(id => ({ id }));
  return new Response(JSON.stringify({
    object: "list",
    data: models
  }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

// ================== HTTP 服务器 ==================

async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);

  // CORS 预检
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      }
    });
  }

  // 路由
  if (url.pathname === "/v1/chat/completions" && request.method === "POST") {
    return handleChatCompletions(request);
  }

  if (url.pathname === "/v1/models" && request.method === "GET") {
    return handleModels();
  }

  // 根路径返回使用说明
  if (url.pathname === "/" && request.method === "GET") {
    return new Response(`
# Puter OpenAI Proxy - Deno 开源版

## 使用方法

### 1. 聊天补全
\`\`\`bash
curl ${url.origin}/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_PUTER_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "claude-sonnet-4",
    "messages": [{"role": "user", "content": "Hello"}],
    "stream": false
  }'
\`\`\`

### 2. 流式聊天
\`\`\`bash
curl ${url.origin}/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_PUTER_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "claude-sonnet-4",
    "messages": [{"role": "user", "content": "Hello"}],
    "stream": true
  }'
\`\`\`

### 3. 获取模型列表
\`\`\`bash
curl ${url.origin}/v1/models \\
  -H "Authorization: Bearer YOUR_PUTER_TOKEN"
\`\`\`

## 支持的模型
${MODELS.map((id) => `- ${id}`).join('\n')}

## 获取 Puter Token
访问 https://puter.com 并登录，在开发者工具中获取 authToken
    `, {
      headers: { "Content-Type": "text/plain" }
    });
  }

  return new Response("Not Found", { status: 404 });
}

// ================== 启动服务 ==================

console.log("🚀 Puter OpenAI Proxy starting...");
console.log("📖 Visit / for usage instructions");

Deno.serve(handler);
