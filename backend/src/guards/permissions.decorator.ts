import { SetMetadata } from '@nestjs/common';

export const Permissions = (...permissions: string[]) =>
    SetMetadata('permissions', permissions);

// import { Permissions } from 'src/guards/permissions.decorator';

// @Permissions('manage_shipments')
// @Get()
// getShipments() {
//   // ...
// }
