import React, { LazyExoticComponent, Suspense } from 'react';

interface IProps {
  Element: LazyExoticComponent<() => JSX.Element>
}

const LazyComponent = (props: IProps) => {
  const { Element } = props;
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Element />
    </Suspense>
  );
};

export default LazyComponent;
