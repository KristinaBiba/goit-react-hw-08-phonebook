import { Card, Skeleton } from '@mui/material';

export function ContastsSkeleton() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '318px',
        marginTop: '24px',
      }}
    >
      {[1, 2, 3, 4, 5].map(item => (
        <Card
          key={item}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '20px',
            boxShadow: 'none',
          }}
        >
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rounded" width={230} height={24} />
          <Skeleton variant="circular" width={24} height={24} />
        </Card>
      ))}
    </div>
  );
}
