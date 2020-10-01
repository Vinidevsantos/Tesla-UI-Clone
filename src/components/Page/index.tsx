import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container, Spacer } from './styles';
import UniqueOverlay from '../UniqueOverlay';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model 1',
            'Model 2',
            'Model 3',
            'Model 4',
            'Model 5',
            'Model 6',
            'Model 7',
          ].map(modelName => (
            <ModelSection
            key={modelName}
            className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent 
                label={modelName}
                description="Order Online for Delivery"
              />
            }
          />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
