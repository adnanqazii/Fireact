import Model from '../models/model';
import { sendNotificationToClient } from '../notify';

const messagesModel = new Model('messages');

export const messagesPage = async (req, res) => {
  try {
    const data = await messagesModel.select('name, message');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addMessage = async (req, res) => {
  const { name, message } = req.body;
  const columns = 'name, message';
  const values = `'${name}', '${message}'`;
  try {
    const data = await messagesModel.insertWithReturn(columns, values);
    const tokens = [
     'fqywrFgAkUrnVYRaUy7kR1:APA91bGh4ka3_FR64CG-53oDqHCE2pWwDDjAE_TfyT4DDEYPHrAJ00JPfmWlr5ewTS6UrSf9owbGbs0Dmc-MwuwUN9-zoXNdHJ8cDNJqMXQm59jMNbaDo1allcA7-Fn1w7OHS-HQmDoA',
     
    ];
    const notificationData = {
      title: 'New message',
      body: message,
    };
    sendNotificationToClient(tokens, notificationData);
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
