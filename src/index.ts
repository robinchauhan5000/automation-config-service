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
dotenv.config();

export const createApiServiceLayer = async (
	domain: string,
	version: string
) => {
	const buildString = readFileSync(
		path.resolve(__dirname, "../src/config/build.yaml"),
		"utf8"
	);
	const valString = readFileSync(
		path.resolve(__dirname, "../src/config/x-validations.yaml"),
		"utf8"
	);

	const valParsed = await loadAndDereferenceYaml(valString);
	const comp = new ConfigCompiler(SupportedLanguages.Typescript);
	fse.emptyDirSync(path.resolve(__dirname, "../generated"));
	await comp.initialize(buildString);
	await comp.generateCode(valParsed as any, "L1-validation");
	await comp.generateL0Schema();

	await createEnvFile(domain, version);
};

const createEnvFile = async (domain: string, version: string) => {
	const env = `DOMAIN="${domain}"
VERSION="${version}"
NODE_ENV="${process.env.NODE_ENV}"
PORT="${process.env.PORT}"
SIGN_PRIVATE_KEY="${process.env.SIGN_PRIVATE_KEY}"
SIGN_PUBLIC_KEY="${process.env.SIGN_PUBLIC_KEY}"
SUBSCRIBER_ID="${process.env.SUBSCRIBER_ID}"
UKID="${process.env.UKID}"
ONDC_ENV="${process.env.ONDC_ENV}"
SUBSCRIBER_URL="${process.env.SUBSCRIBER_URL}"
REDIS_USERNAME="${process.env.REDIS_USERNAME}"
REDIS_HOST="${process.env.REDIS_HOST}"
REDIS_PASSWORD="${process.env.REDIS_PASSWORD}"
REDIS_PORT="${process.env.REDIS_PORT}"
MOCK_SERVER_URL="${process.env.MOCK_SERVER_URL}"
DATA_BASE_URL="${process.env.DATA_BASE_URL}"
API_SERVICE_URL="${process.env.API_SERVICE_URL}"`;
	writeFileSync(path.resolve(__dirname, "../generated/.env"), env);
};

const moveRelevantFiles = async () => {
	await clearAndCopy(
		path.resolve(__dirname, "../template/automation-api-service"),
		path.resolve(__dirname, "../build-output/automation-api-service")
	);
	await clearAndCopy(
		path.resolve(__dirname, "../generated/L1-validation"),
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
	await createApiServiceLayer("test", "v1");
	console.log("sleeping for 3 seconds");
	await sleep(3);
	await moveRelevantFiles();
})();

async function sleep(seconds: number) {
	return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
