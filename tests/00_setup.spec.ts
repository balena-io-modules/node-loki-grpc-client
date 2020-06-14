import * as Docker from 'dockerode';
import sleep from './test-lib/sleep';

const LOKI_IMAGE = 'grafana/loki:1.5.0';
const docker = new Docker({});

async function cleanup() {
	const containers = await docker.listContainers();
	for (const containerInfo of containers) {
		if (containerInfo.Names.filter((name) => name.includes('/loki'))) {
			const container = docker.getContainer(containerInfo.Id);
			await container.stop();
			await container.remove();
		}
	}
}

before(async function () {
	this.timeout(60 * 1000);

	await cleanup();
	console.log(`Pulling ${LOKI_IMAGE}...`);
	await docker.pull(LOKI_IMAGE, {});
	console.log('Image pulled.. creating container..');
	const container = await docker.createContainer({
		Image: LOKI_IMAGE,
		name: 'loki',
		ExposedPorts: { '9095/tcp': {} },
		HostConfig: {
			PortBindings: {
				'9095/tcp': [{ HostPort: '9095/tcp' }],
			},
		},
		Env: [],
	});
	console.log('Container built.. starting..');
	await container.start();
	console.log('Container started... waiting for boot...');
	await sleep(2000);
});

after(async function () {
	cleanup();
});
