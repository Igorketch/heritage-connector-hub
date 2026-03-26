import { useLanguage } from '@/contexts/LanguageContext';
import { getAllRepresentantsMembers } from '@/data/representantsNationauxData';
import GenericMemberProfilePage from '@/components/team/GenericMemberProfilePage';

const RepresentantsMemberProfilePage = () => {
  const { language, t } = useLanguage();
  return (
    <GenericMemberProfilePage
      members={getAllRepresentantsMembers(language)}
      backPath="/team/representants-nationaux"
      backLabel={t('team.cat.representants')}
    />
  );
};

export default RepresentantsMemberProfilePage;
