import { Suspense } from 'react';

export default (_component) => {
    return <Suspense fallback={<div>Page is Loading...</div>}>
        {
            <_component />
        }
    </Suspense>
}