import { readFileSync, writeFileSync } from "fs";
import fse from "fs-extra";
import { ConfigCompiler } from "ondc-code-generator";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { loadAndDereferenceYaml } from "./utils/yaml-utils.js";
import { SupportedLanguages } from "ondc-code-generator/dist/types/compiler-types.js";
import dotenv from "dotenv";
import { clearAndCopy } from "./utils/fs-utilts.js";
import { createEnvFile } from "./utils/env-file.js";
dotenv.config();

export const createApiServiceLayer = async (domain: string) => {
	const buildString = readFileSync(
		path.resolve(__dirname, "../src/config/build.yaml"),
		"utf8"
	);
	const buildParsed = (await loadAndDereferenceYaml(buildString)) as any;
	const valParsed = buildParsed["x-validations"];
	const comp = new ConfigCompiler(SupportedLanguages.Typescript);
	fse.emptyDirSync(path.resolve(__dirname, "../generated"));
	await comp.initialize(buildString);
	await comp.generateCode(valParsed as any, "L1-validations");
	await comp.generateL0Schema();

	const version = buildParsed.info.version as string;
	await createEnvFile(domain, version);
	await moveRelevantFiles();
};

const moveRelevantFiles = async () => {
	await clearAndCopy(
		path.resolve(__dirname, "../template/automation-api-service"),
		path.resolve(__dirname, "../build-output/automation-api-service")
	);
	await clearAndCopy(
		path.resolve(__dirname, "../generated/L1-validations"),
		path.resolve(
			__dirname,
			"../build-output/automation-api-service/src/validations/L1-validation"
		)
	);

	fse.copySync(
		path.resolve(__dirname, "../generated/.env"),
		path.resolve(__dirname, "../build-output/automation-api-service/.env")
	);

	await clearAndCopy(
		path.resolve(__dirname, "../generated/L0-schemas"),
		path.resolve(
			__dirname,
			"../build-output/automation-api-service/src/validations/L0-schemas"
		)
	);
	console.log("deleting generated folder");
	fse.removeSync(path.resolve(__dirname, "../generated"));
};

(async () => {
	await createApiServiceLayer("ONDC:TRV11");
})();
