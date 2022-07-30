import path = require('path');
import { mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files';

// const resolvers = [Hello, Race];
const resolversArray = loadFilesSync(path.join(__dirname, '.'))

export default mergeResolvers(resolversArray);