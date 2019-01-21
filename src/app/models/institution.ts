export class Institution {
    constructor(
        public _id: string,
        public name: String,
        public code: String,
        public password: String,
        public gettoken2: any,
        
        //Test
        // Personalidad
        public reformador: String,
        public ayudador: String,
        public triunfador: String,
        public artista: String,
        public pensador: String,
        public leal: String,
        public entusiasta: String,
        public protector: String,
        public pacifico: String,

        // Estilos de aprendizaje
        public cinestesico: String,
        public visual: String,
        public auditivo: String,
    ) { }
}
