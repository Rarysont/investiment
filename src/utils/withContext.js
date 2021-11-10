import React from "react";

/**
 * HOC to use provider's for contexts api
 *
 * @param {node} Wrappered Wrappered component
 * @param {node} Wrapper Wrapper component
 */
const withContext = (Wrappered, Wrapper) => {
  // eslint-disable-next-line react/display-name
  return ({ children }) => {
    return (
      <Wrapper>
        <Wrappered>{children}</Wrappered>
      </Wrapper>
    );
  };
};

export default withContext;
