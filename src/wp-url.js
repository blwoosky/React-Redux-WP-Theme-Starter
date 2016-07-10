export const BASE_WP_URL = process.env.NODE_ENV == "production" ? '/wp-json' : 'http://blwoosky.local/wp-json';
export const CREATE_COMMENT_URL = process.env.NODE_ENV == "production" ? `${BASE_WP_URL}/wp/v2/comments` : '/comments';
//console.log(process.env.NODE_ENV);