import React from 'react';

const Error = ({ error }) => <p>{error.message.split(':')[1].trim()}</p>;

export default Error;
