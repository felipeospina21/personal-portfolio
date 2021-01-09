import "./src/styles/breakingPoints.scss"
import "./src/styles/globalStyles.scss"

import React from 'react';
import Layout from './src/components/Layout/Layout';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}