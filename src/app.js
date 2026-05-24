const promClient = require('prom-client');

// Metrics collect karo
const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics();

// Metrics endpoint
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', promClient.register.contentType);
    res.end(await promClient.register.metrics());
});
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'DevOps Project API',
        status: 'running',
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        mongodb: mongoose.connection.readyState === 1
            ? 'connected'
            : 'disconnected'
    });
});

app.get('/api/items', async (req, res) => {
    try {
        res.json({
            success: true,
            data: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' }
            ]
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = app;