import path = require('path');
import { mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files';

const typesArray = loadFilesSync(path.join(__dirname, '.'), { extensions: ['graphql'] })

export default mergeTypeDefs(typesArray);