const text = inputData.claude_output.replace(/\n/g, ' ');

const tier = (text.match(/TIER:\s*(.+?)(?=STATUS:|$)/) || [])[1]?.trim() || "";
const status = (text.match(/STATUS:\s*(.+?)(?=AI_RECOMMENDATION:|$)/) || [])[1]?.trim() || "";
const ai_recommendation = (text.match(/AI_RECOMMENDATION:\s*(.+?)(?=REVIEW_REASON:|$)/) || [])[1]?.trim() || "";
const review_reason = (text.match(/REVIEW_REASON:\s*(.+?)$/) || [])[1]?.trim() || "";

return { tier, status, ai_recommendation, review_reason };