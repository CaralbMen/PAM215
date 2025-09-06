class IncioPAM{
    constructor(){
        this.contenido= document.getElementById('contenido');
        this.inicio();
    }
    inicio(){
        this.contenido.innerHTML=
         `<p><br>Carlos Alberto \nMendoza Hernández <br> 
         Grupo: TIID-215 <br>
         Materia: Desarrollo Móvil</p> <br><br>
         Da clic en algún botón de arriba para ver el contenido</p>`;
    }
    Reglamento(){
        this.contenido.innerHTML=
        `<h4>Reglamento</h4>
        <p style="text-align:left;">
        <br>1.Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.
        <br><br>2.Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios de
        inicio:7:00a.m y 14:00 p.m).
        <br><br>3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor (a),
        justificantes entregados fuera de la fecha límite permitido no se aceptan, únicamente se aceptarán recetas médicas y citatorios jurídicos.(De forma física deben ser presentados al
        tutor para ser validados y de forma posterior emitidos).
        <br><br>4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea.(Salvo previo justificante validado por el tutor)
        <br><br>5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se aceptan.
        <br><br>6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.
        <br><br>7. El plagio o copia de trabajos y/o exámenes, será condicionado a reprobar a la asignatura y se reportará al área correspondiente.
        <br><br>8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final
        <br><br>9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes,administrativos, compañeros o cualquier persona perteneciente a la universidad, se realizará
        una primera llama de atención, si el alumno hace caso omiso tendrá que abandonar el aula, tres incidencias de este tipo el alumno no tendrá derecho a examen final o parcial.
        <br><br>10. Uso de laptops y/o dispositivos móviles quedará limitados a uso exclusivo de las actividades que así lo requieran.
        <br><br>11. Prohibido el uso de audífonos durante la clase.
        <br><br>12. Prohibido comer y/o tomar líquidos en el salón.
        <br><br>13. Prohibido sentarse encima de las mesas , así como columpiarse en las sillas.
        <br><br>14.Todo tema académido debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación
        de tutores. En caso de no solucionarse pasar a la dirección del programa educativo (debe mantenerse este seguimiento de forma obligatoria)
        <br><br>15.Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo.
        <br><br>16. El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese día se entregarán exámenes y se brindará retroalimentación
        <br><br>17.Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia, una vez firmado o aceptado por el
        50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión.
        </p>`;
    }
    Lineamientos(){
        this.contenido.innerHTML= `
        <h4>Lineamientos de Classroom</h4>
        <p style="text-align:left;">
            - Participación activa en clase <br>
            - Trabajos en classroom <br>
            - Entregas completas<br>
            - Respetar tiempos de entrega <br>
            - Presentación de trabajo calidad universitaria<br>
            - Todos los trabajos llevan portada estilo libre: Logo UPQ, tema, datos de alumno, materia<br>
            - Conclusiones de aprendizaje: Descripción de lo aprendido durante el desarrollo de la actividad <br>
            - No usar chat en prácticas o examen
        </p>
        `;
    }
    Fechas(){
        this.contenido.innerHTML= `
        <h4>Fechas Parciales</h4>
        <table>
            <tr>
                <td>1er Parcial:</td>
                <td>29 - 09 - 2025</td>
            </tr>
            <tr>
                <td>2dor Parcial:</td>
                <td>03 - 11 - 2025</td>
            </tr>
            <tr>
                <td>3er Parcial:</td>
                <td>01 - 12 - 2025</td>
            </tr>
            <tr>
                <td>Final:</td>
                <td>08 - 12 - 2025</td>
            </tr>
        </table>
        `;
    }
    Porcentajes()
    {
        this.contenido.innerHTML= `
        <h4>Lineamientos de evaluación</h4>
        <table>
            <tr>
                <td></td>
                <td>1P</td>
                <td>2P</td>
                <td>3P</td>
            </tr>
            <tr>
                <td>Evidencia de conocimiento</td>
                <td>40%</td>
                <td>40%</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>Evidencia de desempeño</td>
                <td>20%</td>
                <td>20%</td>
                <td>10%</td>
            </tr>
            <tr>
                <td>Evidencia de producto</td>
                <td>30%</td>
                <td>20%</td>
                <td>40%</td>
            </tr>
            <tr>
                <td>Proyecto integrador</td>
                <td>10%</td>
                <td>20%</td>
                <td>30%</td>
            </tr>
        </table>  
        `;
    }
}
const llamar= new IncioPAM();