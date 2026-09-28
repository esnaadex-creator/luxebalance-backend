const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let userPreferences = {
    userId: "luxe_vip_01",
    calendarSync: false,
    calendarType: "google",
    pushNotifications: true,
    dailyBriefing: true,
    dndMode: false
};

app.post('/api/v1/command', async (req, res) => {
    const { commandText } = req.body;
    if (!commandText) {
        return res.status(400).json({ success: false, message: "يرجى إرسال الأمر." });
    }
    res.status(200).json({
        success: true,
        data: {
            originalInput: commandText,
            message: "✓ تمت المعالجة بنجاح عبر السيرفر السحابي."
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});