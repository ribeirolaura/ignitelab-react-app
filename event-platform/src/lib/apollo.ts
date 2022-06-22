import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ohxho003ww01ywa48kf1du/master', 
    cache: new InMemoryCache()
})