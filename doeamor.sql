-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           5.7.24 - MySQL Community Server (GPL)
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para doeamor
CREATE DATABASE IF NOT EXISTS `doeamor` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `doeamor`;

-- Copiando estrutura para tabela doeamor.chat
CREATE TABLE IF NOT EXISTS `chat` (
  `id_doador` int(11) NOT NULL,
  `nome_doador` varchar(30) NOT NULL,
  `id_instituicao` int(11) NOT NULL,
  `nome_instituicao` varchar(30) NOT NULL,
  `mensagem` text,
  `_data` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela doeamor.chat: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;

-- Copiando estrutura para tabela doeamor.doador
CREATE TABLE IF NOT EXISTS `doador` (
  `id_doador` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `cpf` bigint(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `localizacao` text NOT NULL,
  `telefone` bigint(20) NOT NULL,
  `nascimento` date NOT NULL,
  `sexo` enum('M','F') NOT NULL,
  `senha` varchar(20) NOT NULL,
  PRIMARY KEY (`id_doador`),
  UNIQUE KEY `cpf` (`cpf`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `telefone` (`telefone`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela doeamor.doador: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `doador` DISABLE KEYS */;
INSERT INTO `doador` (`id_doador`, `nome`, `cpf`, `email`, `localizacao`, `telefone`, `nascimento`, `sexo`, `senha`) VALUES
	(1, 'kaiq', 12900000000, 'kaiq@email.com', 'rua tal numero tal cidade tal', 11122233300, '2002-10-22', 'M', 'Umasenhaai007');
/*!40000 ALTER TABLE `doador` ENABLE KEYS */;

-- Copiando estrutura para tabela doeamor.feedback
CREATE TABLE IF NOT EXISTS `feedback` (
  `id_doador` int(11) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `comentario` text NOT NULL,
  `nota` int(11) NOT NULL,
  `denuncia` text NOT NULL,
  PRIMARY KEY (`id_doador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela doeamor.feedback: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;

-- Copiando estrutura para tabela doeamor.historico
CREATE TABLE IF NOT EXISTS `historico` (
  `id_doador` int(11) NOT NULL,
  `produto` text NOT NULL,
  `id_instituicao` int(11) NOT NULL,
  `instituicao` varchar(30) NOT NULL,
  `dia` date NOT NULL,
  PRIMARY KEY (`id_doador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela doeamor.historico: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `historico` DISABLE KEYS */;
/*!40000 ALTER TABLE `historico` ENABLE KEYS */;

-- Copiando estrutura para tabela doeamor.instituicao
CREATE TABLE IF NOT EXISTS `instituicao` (
  `id_instituicao` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `cnpj` bigint(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `localizacao` text NOT NULL,
  `telefone` bigint(20) NOT NULL,
  `produtos` text NOT NULL,
  `senha` varchar(20) NOT NULL,
  PRIMARY KEY (`id_instituicao`),
  UNIQUE KEY `cnpj` (`cnpj`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `telefone` (`telefone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela doeamor.instituicao: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `instituicao` DISABLE KEYS */;
/*!40000 ALTER TABLE `instituicao` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
