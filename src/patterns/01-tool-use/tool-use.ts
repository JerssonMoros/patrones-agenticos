import { generateText } from "ai";
import { createTracer, model } from '../../helpers/index.js';

const question = 'Cuanto es el valor del curso para aprender a tocar piano? Si quiero incluir horas adicionales a la semana y le aplico el 15% de descuento. Dame las horas totales al mes tambien.';

async function withoutTools(){

    const tracer = createTracer('sin-herramientas')
    const { text } = await generateText({
        model,
        prompt: question,
        onStepEnd: tracer.onStepFinish
    })
    console.log('/n Respuesta:', text.green);

    return tracer.summary()
}

export async function toolUseMain(){
    const resultA = await withoutTools()

    console.log('\n ====== Comparativa =====');
    console.table({
        'Sin herramientas': resultA
    });
}