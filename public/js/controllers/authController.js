const login = (req, res) => {
    res.status(200).json({ message: "Successful login" });
};
const register = (req, res) => {
    res.status(201).json({ message: "Successful registration" });
};
export { login, register };
