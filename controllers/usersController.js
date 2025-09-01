export const usersController = (req, res) => {
  const users = [
    { name: "Ilia", age: 19, proffesion: "programmer developer" },
    { name: "Egor", age: 18, proffesion: "unemployed" },
    { name: "Victor", age: 46, proffesion: "boss" },
  ];

  res.render("users", { users });
};

export const homeController = (req, res) => {
    res.render("home")
}

export const userController = (req, res) => {
  res.render("user")
}