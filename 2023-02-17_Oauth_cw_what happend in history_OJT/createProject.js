const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{"current":{"signedInTeamId":"507f1f77bcf86cd799439020","actingTeamId":"507f1f77bcf86cd799439021","onBehalfOf":"any.person@example.com"},"projectW":{"name":"Sarah Oct 16th","description":"Video for Sarah\'s demo to VCs","projectType":{"projectTypeId":"507f1f77bcf86cd799439020","prKey":"wlekjhrtekvrqbnm"},"containingCampaign":{"_id":"507f1f77bcf86cd799439020","prKey":"wlekjhrtekvrqbnm"}}}'
};

fetch('https://127.0.0.1:10010/project/create', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));