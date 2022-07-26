import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IServerResponse} from 'types/IServerResponse';
import {IUser} from 'types/IUser';

const GITHUB_REDUCER_PATH = 'github/api';
const GITHUB_BASE_URL = 'https://api.github.com/';

const SEARCH_USERS_PATH = 'search/users';

export const githubApi = createApi({
    reducerPath: GITHUB_REDUCER_PATH,
    baseQuery: fetchBaseQuery({
        baseUrl: GITHUB_BASE_URL,
    }),
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: SEARCH_USERS_PATH,
                params: {
                    q: search,
                    per_page: 10,
                }
            }),
            transformResponse: (response: IServerResponse<IUser>) => response.items,
        })
    })
});

export const {useSearchUsersQuery} = githubApi;
