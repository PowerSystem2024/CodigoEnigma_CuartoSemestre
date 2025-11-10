export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        if (Array.isArray(error.errors)) {
            return res.status(400).json({ errors: error.errors.map((error) => error.message) });
        }
        return res.status(400).json(error.message);
    }
};