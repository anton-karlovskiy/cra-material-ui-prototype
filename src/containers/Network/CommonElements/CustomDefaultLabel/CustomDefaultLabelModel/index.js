
import { LabelModel, LabelModelGenerics, LabelModelOptions } from '@projectstorm/react-diagrams-core';
import { DeserializeEvent } from '@projectstorm/react-canvas-core';

export interface CustomDefaultLabelModelOptions extends LabelModelOptions {
	label?: string;
}

export interface CustomDefaultLabelModelGenerics extends LabelModelGenerics {
	OPTIONS: CustomDefaultLabelModelOptions;
}

export class CustomDefaultLabelModel extends LabelModel<CustomDefaultLabelModelGenerics> {
	constructor(options: CustomDefaultLabelModelOptions = {}) {
		super({
			...options,
			offsetY: options.offsetY == null ? -23 : options.offsetY,
			type: 'custom-default'
		});
	}

	setLabel(label: string) {
		this.options.label = label;
	}

	deserialize(event: DeserializeEvent<this>) {
		super.deserialize(event);
		this.options.label = event.data.label;
	}

	serialize() {
		return {
			...super.serialize(),
			label: this.options.label
		};
	}
}
