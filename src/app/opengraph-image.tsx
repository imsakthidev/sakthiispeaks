import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Sakthi Speaks Digital | Web Developer & Growth Expert';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Abstract background graphics */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            left: -200,
            width: 600,
            height: 600,
            background: 'radial-gradient(circle, rgba(0,82,255,0.15) 0%, rgba(9,9,11,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -200,
            right: -200,
            width: 600,
            height: 600,
            background: 'radial-gradient(circle, rgba(0,82,255,0.15) 0%, rgba(9,9,11,0) 70%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: 32,
            padding: '60px 80px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.05em',
              marginBottom: 16,
              display: 'flex',
            }}
          >
            Sakthi Speaks
            <span style={{ color: '#0052ff', marginLeft: 16 }}>Digital</span>
          </div>

          <div
            style={{
              fontSize: 32,
              color: '#a1a1aa',
              letterSpacing: '0.05em',
              marginBottom: 48,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span style={{ marginBottom: 12 }}>Web Developer • AI Solutions</span>
            <span>Digital Content Strategist</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                fontSize: 24,
                color: '#ffffff',
                background: '#0052ff',
                padding: '12px 32px',
                borderRadius: 100,
                fontWeight: 600,
              }}
            >
              sakthiispeaks.vercel.app
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
