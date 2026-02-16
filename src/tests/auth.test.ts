import { expect, test } from "vitest";
import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth";

const apikey: string = "Gty5PVEuGd73pIsstV0hqid2UOaoUAK7";

// test empty header
const emptyHeader: IncomingHttpHeaders = {};

test("empty header", () => {
  expect(getAPIKey(emptyHeader)).toBeNull();
});

// test valid header

const validHeader: IncomingHttpHeaders = {
  authorization: "ApiKey " + apikey,
};

test("valid header", () => {
  expect(getAPIKey(validHeader)).toBe(apikey);
});

// test different authentication scheme

const diffAuthSchemeHeader: IncomingHttpHeaders = {
  authorization: "Bearar " + apikey,
};

test("different authentication scheme", () => {
  expect(getAPIKey(diffAuthSchemeHeader)).toBeNull();
});

// test different apiKey

const diffApiKeyHeader: IncomingHttpHeaders = {
  authorization: "Bearar invalidKey",
};

test("test different apiKey", () => {
  expect(getAPIKey(diffApiKeyHeader)).toBeNull();
});
