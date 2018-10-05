import { MESSAGES_REQUEST } from "./constants";

export const loadMessages = data => ({
  type: MESSAGES_REQUEST,
  data
});
