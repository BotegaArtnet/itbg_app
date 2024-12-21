import React from 'react';
import { Grid, Col } from '@/design-system/components/Layout/Grid';

export default function GridDemo() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Grid System Demo</h1>
      
      {/* Basic Grid Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Grid</h2>
        <Grid>
          <Col xs={12} md={4} className="bg-blue-100 p-4 text-center">
            Column 1
          </Col>
          <Col xs={12} md={4} className="bg-blue-200 p-4 text-center">
            Column 2
          </Col>
          <Col xs={12} md={4} className="bg-blue-300 p-4 text-center">
            Column 3
          </Col>
        </Grid>
      </section>

      {/* Responsive Grid Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Responsive Grid</h2>
        <Grid>
          <Col xs={12} sm={6} md={4} lg={3} className="bg-green-100 p-4 text-center">
            Responsive Col 1
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="bg-green-200 p-4 text-center">
            Responsive Col 2
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="bg-green-300 p-4 text-center">
            Responsive Col 3
          </Col>
          <Col xs={12} sm={6} md={12} lg={3} className="bg-green-400 p-4 text-center">
            Responsive Col 4
          </Col>
        </Grid>
      </section>

      {/* Nested Grid Example */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Nested Grid</h2>
        <Grid>
          <Col xs={12} md={6} className="bg-purple-100 p-4">
            <Grid>
              <Col xs={6} className="bg-purple-200 p-2 text-center">
                Nested 1
              </Col>
              <Col xs={6} className="bg-purple-300 p-2 text-center">
                Nested 2
              </Col>
            </Grid>
          </Col>
          <Col xs={12} md={6} className="bg-purple-400 p-4 text-center">
            Regular Column
          </Col>
        </Grid>
      </section>
    </div>
  );
} 