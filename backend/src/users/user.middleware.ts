import { check, validationResult } from "express-validator";
import { type Request, type Response, type NextFunction } from "express";

function validateUserRegistration() {
  return [
    check("name").notEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Valid email is required"),
    check("role")
      .isIn(["buyer", "seller"])
      .withMessage("Role must be either buyer or seller"),
  (req: Request, res: Response, next: NextFunction) => {
    console.log("Validating request:", req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Bad Request" });
    }

    next();
  },
];

}

export { validateUserRegistration };

