package explorepage;

import org.junit.Test;
import testframework.TestBase;

public class SelectElementsTest extends TestBase {

    @Test
    public void clickOnBasquiat() {
        given.onExplorePage();
        given.searchedExplorePageFor("Mich");
        when.clickElementWithText("Basquiat");
    }

}