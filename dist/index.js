"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
// Serve static assets from the public folder
app.use('/img', express_1.default.static(path_1.default.join(__dirname, '..', 'public/img')));
app.use('/scripts', express_1.default.static(path_1.default.join(__dirname, '..', 'public/scripts')));
app.use('/dist/', express_1.default.static(path_1.default.join(__dirname, '..', 'dist')));
// Routes
app.get('/', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'index.html'));
});
app.get('/en', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'en', 'index.html'));
});
app.get('/es', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'es', 'index.html'));
});
// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map