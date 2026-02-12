import {expect, test} from 'vitest'
import { getAPIKey } from './src/api/auth.js'
import { IncomingHttpHeaders } from 'http';

const apikey: string = 'Gty5PVEuGd73pIsstV0hqid2UOaoUAK7';

// test empty header
const emptyHeader: IncomingHttpHeaders = {
};


test("empty header", () => {
	expect(getAPIKey(emptyHeader)).toBeNull()
})


// test valid header 

const validHeader: IncomingHttpHeaders = {
	authorization: "ApiKey " + apikey
}

test("valid header", () => {
	expect(getAPIKey(validHeader)).toBe(apikey)
})



// test different authentication scheme


const diffAuthSchemeHeader: IncomingHttpHeaders = {
	authorization: "Bearar " + apikey
}

test("different authentication scheme", () => {
	expect(getAPIKey(diffAuthSchemeHeader)).toBeNull();
})


// test different apiKey


const diffApiKeyHeader: IncomingHttpHeaders = {
	authorization: "Bearar invalidKey"
}

test("different authentication scheme", () => {
	expect(getAPIKey(diffAuthSchemeHeader)).toBeNull();
}) 