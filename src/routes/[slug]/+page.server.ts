import { request, gql } from 'graphql-request';
import { PUBLIC_GRAPHQL_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const query = gql`
        query Page($slug : String) {
            PagesTwoColumns(where : {slug : {equals : $slug}}) {
                docs {      
                    title
                    subTitle
                    firstColumnContent
                    secondColumnContent
                    bottomCards {
                        buttonText
                        buttonLink
                        title
                        text
                    }
                }
            }
        }
    `

    const data = await request(PUBLIC_GRAPHQL_URL, query , {slug : params?.slug});
    if (data?.PagesTwoColumns !== null && data?.PagesTwoColumns !== undefined) {
        return  { data : data } ;
    }
    throw error(404, 'Not found');
}


export const prerender = true;