import { EntryAdapter, StreamAdapter, Timestamp } from '../../src';

export default function createStreamAdapter({
	date = new Date(),
	line = 'Hello World!',
	labels = '{loki="cool"}',
}) {
	const timeStamp = new Timestamp();
	timeStamp.fromDate(date);

	const entryAdapter = new EntryAdapter();
	entryAdapter.setTimestamp(timeStamp).setLine(line);

	const streamAdapter = new StreamAdapter();
	streamAdapter.setLabels(labels).addEntries(entryAdapter);

	return streamAdapter;
}
