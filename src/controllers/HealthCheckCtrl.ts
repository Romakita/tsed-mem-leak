import { Hidden } from "@tsed/swagger";
import { Controller, Get } from "@tsed/common";
import { Constant } from "@tsed/di";

@Controller('/')
export class HealthCheckCtrl {

	@Get('/healthcheck')
	@Get('/')
	public healthCheck(): { version: string } {
		return {
			version: '1.0.0'
		};
	}
}