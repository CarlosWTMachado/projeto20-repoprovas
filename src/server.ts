import app from './app';
import { APPLICATIONPORT } from './environmentVariables';

const PORT = APPLICATIONPORT();
app.listen(PORT, () => {
	console.log(`Rodando na porta: ${PORT}`);
});

