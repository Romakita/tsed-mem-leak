import { Controller, Get, PathParams, $log, Post, BodyParams, Put, QueryParams, Delete } from '@tsed/common';
import { Returns } from '@tsed/swagger';
import { Data } from '../models/Data';

@Controller('ctrl')
export class TestCtrl {

	@Get('/:id')
	@Returns(Data)
	async get(
		@PathParams('id') id: number,
	): Promise<Data> {
		$log.info(`GET - id ${id}`);

		return {
			id,
			name: `${id} name`
		};
	}

	@Post('/:id')
	@Returns(Data)
	async post (
		@PathParams('id') id: number,
		@BodyParams('name') name: string
	): Promise<Data> {
		$log.info(`POST - id ${id} `)

		return {
			id,
			name
		};
	}

	@Put('/:id')
	@Returns(Data)
	async put (
		@PathParams('id') id: number,
		@QueryParams('name') name: string
	): Promise<Data> {
		$log.info(`PUT - id ${id} `)

		return {
			id,
			name
		};
	}

	@Delete('/:id')
	@Returns(Data)
	async delete(
		@PathParams('id') id: number,
	): Promise<Data> {
		$log.info(`DELETE - id ${id} `)

		return {
			id,
			name: `${id} name`
		};
	}
}
