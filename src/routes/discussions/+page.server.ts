import { request, gql } from "graphql-request";
import { PUBLIC_GRAPHQL_URL } from "$env/static/public";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const query = gql`
        query Brands {
            Brands {
                docs {
                    name
                    id
                }
            }
        }
    `;

    const data = await request(PUBLIC_GRAPHQL_URL, query);
    if (data?.Brands !== null && data?.Brands !== undefined) {
        return  { data : data } ;
    }
    throw error(404, "Not found");
}