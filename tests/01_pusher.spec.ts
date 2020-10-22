import { expect } from './test-lib/chai';
import pushStreams from './test-lib/push-streams';

describe('PusherClient', function () {
	describe('PusherClient.Push', function () {
		it('should push a stream without error', async function () {
			const response = await pushStreams({});
			expect(response).to.be.not.null;
		});
	});
});
