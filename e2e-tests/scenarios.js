describe('E2E: todo page', function() {
	var ptor;
	var text_create = element(by.id('text_create'));

	beforeEach(function() {
		browser.get('http://localhost:3000/#/todo');
		ptor = browser.getTitle();
	});

	it('should check the create button in the page', function() {
		var btn_create = by.id('btn_create');
		expect(browser.isElementPresent(btn_create)).toBe(true);
	});
	
	it('should check the text input in the page', function() {
		expect(browser.isElementPresent(text_create)).toBe(true);
	});
	
	it('should check the delete button in the page', function() {
		var btn_delete = by.id('btn_delete');
		expect(browser.isElementPresent(btn_delete)).toBe(false);
	});
	
	it('should check the save button in the page', function() {
		var btn_save = by.id('btn_save');
		expect(browser.isElementPresent(btn_save)).toBe(false);
	});
	
	it('should check the cancel button in the page', function() {
		var btn_cancel = by.id('btn_cancel');
		expect(browser.isElementPresent(btn_cancel)).toBe(false);
	});
	
	it('should check the edit button in the page', function() {
		var btn_edit = by.id('btn_edit');
		expect(browser.isElementPresent(btn_edit)).toBe(false);
	});
});




