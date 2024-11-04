import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, resp) => {
  return resp.status(200).json({
    message: "ok",
  });
});

export { registerUser };
