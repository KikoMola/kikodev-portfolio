/** @typedef {Object} GitHubUser
 * @property {string} login
 * @property {string} avatar_url
 * @property {string} name
 * @property {string} bio
 * @property {number} public_repos
 * @property {number} followers
 * @property {number} following
 * @property {string} html_url
 * @property {string} location
 * @property {string} blog
 * @property {string} company
 */

/** @type {GitHubUser} */
export const GitHubUser = {};

/**
 * @param {string} username
 * @returns {Promise<GitHubUser>}
 */
export async function getGithubUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
        throw new Error('Error al obtener datos de GitHub');
    }
    
    return response.json();
}

export async function getGithubRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
    
    if (!response.ok) {
        throw new Error('Error al obtener repositorios de GitHub');
    }
    
    return response.json();
} 