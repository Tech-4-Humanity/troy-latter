/**
 * MCP Bridge AI Utilities
 * Connects to your personal AI bridge with Troy Latter's full context
 */

export interface GenerateContentOptions {
  prompt: string;
  type: 'cv' | 'communication' | 'strategic' | 'technical';
  context?: Record<string, any>;
  maxTokens?: number;
}

export interface GenerateContentResponse {
  content: string;
  metadata?: {
    model?: string;
    tokens?: number;
  };
}

/**
 * Generate content using MCP Bridge AI
 * Uses Troy Latter's actual experience, voice, and context from MCP server
 */
export async function generateContent(
  options: GenerateContentOptions
): Promise<string> {
  const apiUrl = import.meta.env.VITE_MCP_BRIDGE_AI_URL;
  
  if (!apiUrl) {
    throw new Error('MCP Bridge AI URL not configured. Add VITE_MCP_BRIDGE_AI_URL to environment variables.');
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: options.prompt,
        type: options.type,
        context: options.context || {},
        maxTokens: options.maxTokens || 2000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`MCP Bridge AI error (${response.status}): ${errorText}`);
    }

    const data: GenerateContentResponse = await response.json();
    return data.content;
  } catch (error) {
    console.error('MCP Bridge AI generation failed:', error);
    throw error;
  }
}

/**
 * Check if MCP Bridge AI is available
 */
export function isMCPBridgeAIAvailable(): boolean {
  return !!import.meta.env.VITE_MCP_BRIDGE_AI_URL;
}
