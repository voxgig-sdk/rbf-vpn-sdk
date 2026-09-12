import { RbfVpnEntityBase } from '../RbfVpnEntityBase';
import type { RbfVpnSDK } from '../RbfVpnSDK';
import type { Control } from '../types';
import type { Subscription, SubscriptionLoadMatch } from '../RbfVpnTypes';
declare class SubscriptionEntity extends RbfVpnEntityBase<Subscription> {
    constructor(client: RbfVpnSDK, entopts: any);
    make(this: SubscriptionEntity): SubscriptionEntity;
    load(this: any, reqmatch?: SubscriptionLoadMatch, ctrl?: Control): Promise<SubscriptionEntity>;
}
export { SubscriptionEntity };
