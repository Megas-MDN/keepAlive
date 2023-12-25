const fs = require('fs/promises');
const { exec } = require('child_process');

const caminhoBatch = 'automaticGit.bat';

const mensagemCommit = 'Adding new file automatically';

async function criarArquivo() {
  const arquivoNovo = `file-${Date.now()}.txt`;

  await fs.writeFile(
    `./files/${arquivoNovo}`,
    `${mensagemCommit} - ${new Date()} \n`,
    { encoding: 'utf8' }
  );
}

criarArquivo().then(() => {
  const callCommand = `${caminhoBatch} 'N: ${new Date()}'`;

  exec(`call ${callCommand}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o arquivo batch: ${error.message}`);
      return;
    }
    console.log(`Saída do processo:\n${stdout}`);
  });
});
