const bcrypt = require("bcryptjs");

const senhaDoUsuario = "senha123";

async function rodarTudo() {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(senhaDoUsuario, salt);
    console.log(hash);
  } catch (err) {
    console.error(err);
  }
}

rodarTudo();
